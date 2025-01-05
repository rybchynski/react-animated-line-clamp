import React, { RefObject } from 'react';

type Props = {
  content: string | JSX.Element;
  showMoreButtonContent: string | JSX.Element;
  showLessButtonContent?: string | JSX.Element;
  classes?: {
    blockWrapper?: string;
    contentWrapper?: string;
    content?: string;
    button?: string;
  };
  duration?: number;
  easing?: string;
  lineClamp?: number;
  hideExpandedButton?: boolean;
};

const ANIMATION_DURATION = 500;

const hooks = {
  useLineClamp(
    wrapperContent: RefObject<HTMLElement>,
    innerContent: HTMLDivElement | null,
    content: string | JSX.Element,
    lineClamp: number,
    duration: number,
    easing: string
  ) {
    const [collapsed, setCollapsed] = React.useState<boolean>(true);
    const [collapsedButtonNeeded, setCollapsedButtonNeed] = React.useState<boolean | null>(null);
    const [maxWrapperHeight, setMaxWrapperHeight] = React.useState<number | null>(null);
    const [maxHeight, setMaxHeight] = React.useState<number | null>(null);
    const [clamped, setClamped] = React.useState<boolean>(true);
    const [animating, setAnimating] = React.useState<boolean>(false);

    const handleReadMoreClick = React.useCallback(() => setCollapsed(!collapsed), [collapsed]);

    React.useEffect(() => {
      if (innerContent && content && !collapsedButtonNeeded) {
        setCollapsedButtonNeed(
          !!(
            innerContent.offsetHeight &&
            innerContent.scrollHeight &&
            innerContent.offsetHeight < innerContent.scrollHeight
          )
        );
      }
    }, [innerContent, content, collapsedButtonNeeded]);

    React.useEffect(() => {
      if (wrapperContent && !maxWrapperHeight) {
        setTimeout(() => {
          if (wrapperContent.current) {
            setMaxWrapperHeight(wrapperContent.current.offsetHeight);
            setMaxHeight(wrapperContent.current.offsetHeight);
          }
        }, 0);
      }
    }, [maxWrapperHeight, wrapperContent]);

    const openHandler = React.useCallback(() => {
      setClamped(false);
      setAnimating(true);

      setTimeout(() => {
        innerContent && setMaxHeight(innerContent.offsetHeight);
      }, 0);

      setTimeout(() => setAnimating(false), duration);
    }, [innerContent, setClamped, duration]);

    const closeHandler = React.useCallback(() => {
      setAnimating(true);
      setMaxHeight(maxWrapperHeight);

      setTimeout(() => {
        setClamped(true);
        setAnimating(false);
      }, duration);
    }, [maxWrapperHeight, setClamped, duration]);

    const handleButtonClick = React.useCallback(() => {
      handleReadMoreClick();
      clamped ? openHandler() : closeHandler();
    }, [clamped, closeHandler, openHandler, handleReadMoreClick]);

    const contentWrapperStyle = React.useMemo<React.CSSProperties>(
      () => ({
        WebkitLineClamp: clamped ? lineClamp : 'none',
        maxHeight: `${maxHeight}px`,
        transition: `max-height ${duration}ms ${easing}`,
        display: '-webkit-box',
        position: 'relative',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical'
      }),
      [clamped, lineClamp, maxHeight, duration, easing]
    );

    return {
      collapsedButtonNeeded,
      handleButtonClick,
      collapsed,
      contentWrapperStyle,
      animating
    };
  }
};

export const ReactLineClamp = (props: Props) => {
  const {
    content,
    showMoreButtonContent,
    classes,
    showLessButtonContent = 'Show Less',
    hideExpandedButton = false,
    duration = ANIMATION_DURATION,
    lineClamp = 4,
    easing = 'ease-in-out'
  } = props;

  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const { handleButtonClick, collapsed, collapsedButtonNeeded, contentWrapperStyle, animating } =
    hooks.useLineClamp(wrapperRef, contentRef.current, content, lineClamp, duration, easing);

  const buttonContent = collapsed ? showMoreButtonContent : showLessButtonContent;
  const showButton = !(!collapsedButtonNeeded || (hideExpandedButton && !collapsed));

  return (
    <div className={classes?.blockWrapper}>
      <div ref={wrapperRef} className={classes?.contentWrapper} style={contentWrapperStyle}>
        <div ref={contentRef} className={classes?.content}>
          {content}
        </div>
      </div>

      {showButton && (
        <button disabled={animating} onClick={handleButtonClick} className={classes?.button}>
          {buttonContent}
        </button>
      )}
    </div>
  );
};
