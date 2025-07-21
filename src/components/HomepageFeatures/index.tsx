import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  png: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Who is Jesus Christ?',
    png: require('@site/static/img/crucifixion-min.png').default,
    description: (
      <>
        Was Jesus an imposter or truly God? Was He actually crucified, buried and resurrected? If so, why would the Son of Man make the ultimate sacrifice and give His life as a substitute for us? And most importantly, is He alive today?
      </>
    ),
  },
  {
    title: 'Is the Bible reliable?',
    png: require('@site/static/img/passover-min.png').default,
    description: (
      <>
        Some dismiss the Bible as a mere fable, others question it's accuracy, while many believe it to be 'the inspired word of God' ... so which is correct? Even if the Bible is accurate, what relevance could it possibly hold in today's modern world?
      </>
    ),
  },
  {
    title: 'Does God care about me?',
    png: require('@site/static/img/peter-min.png').default,
    description: (
      <>
        Absolutely! He loves you deeply and knows you by name. Even before you were born, He had plans for your life and made a way to restore your relationship with Him. But the real question is - do you know Him?
      </>
    ),
  },
];

function Feature({title, png, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center">
        <img src={png} className=""/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <p>
          Those searching for deeper understanding of life, death and resurrection often look to history for answers. All of history, everything that came before the cross at Calvary and all that has followed - centers on that pivotal moment, with Jesus Christ undeniably standing as the central figure in humanity's timeline.
          </p>
          <p>
          Jesus Christ is by far the most influential figure in human history. He gave the world an ethics lesson, the likes of which has never been seen before or since! When Jesus walked the earth, He transformed people with His message of love, grace and redemption. As the promised Messiah, He fulfilled ancient prophecies, performed miracles and freely offered salvation to all who believe in Him. His death on the cross and resurrection stand as the cornerstone of Christian faith, revealing God's profound love for humanity and His plan for eternal life.
          </p>
          <p>
          To uncover the truth about Jesus Christ, we examine His life and significance from multiple perspectives. This includes exploring the Bible, the lives of His followers and historical records, as well as addressing the arguments of sceptics concerning His identity, miracles and the reliability of biblical accounts.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
