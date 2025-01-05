import { ReactLineClamp } from '../lib/components/ReactLineClamp';
import styles from './App.module.css';

function App() {
  const blockContent = (
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempora eaque aut voluptates
      maxime, at optio numquam qui odio voluptatibus repellendus impedit. Aut, provident ratione
      enim eaque earum fugit? Hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
      tempora eaque aut voluptates maxime, at optio numquam qui odio voluptatibus repellendus
      impedit. Aut, provident ratione enim eaque earum fugit? Hic. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Sed tempora eaque aut voluptates maxime, at optio numquam qui
      odio voluptatibus repellendus impedit. Aut, provident ratione enim eaque earum fugit? Hic.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempora eaque aut voluptates
      maxime, at optio numquam qui odio voluptatibus repellendus impedit. Aut, provident ratione
      enim eaque earum fugit? Hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
      tempora eaque aut voluptates maxime, at optio numquam qui odio voluptatibus repellendus
      impedit. Aut, provident ratione enim eaque earum fugit? Hic. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Sed tempora eaque aut voluptates maxime, at optio numquam qui
      odio voluptatibus repellendus impedit. Aut, provident ratione enim eaque earum fugit? Hic.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempora eaque aut voluptates
      maxime, at optio numquam qui odio voluptatibus repellendus impedit. Aut, provident ratione
      enim eaque earum fugit? Hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
      tempora eaque aut voluptates maxime, at optio numquam qui odio voluptatibus repellendus
      impedit. Aut, provident ratione enim eaque earum fugit? Hic.
    </span>
  );

  return (
    <>
      <ReactLineClamp
        duration={600}
        content={blockContent}
        lineClamp={4}
        easing="ease-in"
        showMoreButtonContent={'Show More'}
        showLessButtonContent={'Show Less'}
        hideExpandedButton={false}
        classes={{
          blockWrapper: styles.blockWrapperClass,
          contentWrapper: styles.contentWrapperClass,
          button: styles.buttonClass,
          content: styles.contentClass
        }}
      />
    </>
  );
}

export default App;
