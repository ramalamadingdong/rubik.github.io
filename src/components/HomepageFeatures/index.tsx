import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  Png?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Photonvision Support',
    Png: require('@site/static/img/PhotonVision-Icon.png').default,
    description: (
      <>
        RUBIK Pi provides seamless integration with Photonvision, enabling advanced
        computer vision capabilities for your FIRST Robotics Competition robot.
      </>
    ),
  },
  {
    title: 'AI Acceleration',
    Png: require('@site/static/img/qualcomm-ai-hub-on-device.png').default,
    description: (
      <>
        RUBIK Pi leverages Qualcomm&apos;s AI acceleration technology to deliver
        high-performance vision processing, ensuring your robot can detect and
        analyze objects with precision and speed.
      </>
    ),
  },
  {
    title: 'Powered by Qualcomm Dragonwing',
    Png: require('@site/static/img/dragonwing.png').default,
    description: (
      <>
        RUBIK Pi is powered by Qualcomm&apos;s cutting-edge AI acceleration technology,
        ensuring your robot can detect and analyze objects with precision and speed.
      </>
    ),
  },
];

function Feature({title, Svg, Png, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Png && <img src={Png} className={styles.featureSvg} role="img" alt={title} />}
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
