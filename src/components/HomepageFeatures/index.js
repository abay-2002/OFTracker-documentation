import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Create a organisation',
    Svg: require('@site/static/img/homepage-img/create-new-organisation.svg').default,
    description: (
      <>
        Create your organisation in just a few simple click, its that easy!
      </>
    ),
  },
  {
    title: 'Manage your organisation',
    Svg: require('@site/static/img/homepage-img/manage-your-organisation.svg').default,
    description: (
      <>
        Calmly and neatly track your organisation financial cash flow, set your organisation cash goal, see who's already paid its bill and those who's haven't.
      </>
    ),
  },
  {
    title: 'Set organisation cash goal',
    Svg: require('@site/static/img/homepage-img/set-organisation-cash-goal.svg').default,
    description: (
      <>
        All people are ready and set on your organisation? set your organisation cash goal, start the season then let OFTracker do the track thing.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
