import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ローコード',
    Svg: require('@site/static/img/program-2.svg').default,
    description: (
      <>
        Teigi は、アプリケーションを定義する KVS(Key Value Store)からアプリケーションの実行用のソースコード、
        構成情報、アクセス制御情報、バージョン変換ツールなどを生成し、各種実行エンジンに展開するローコード開発ツールです。
      </>
    ),
  },
  {
    title: 'Single Page Application',
    Svg: require('@site/static/img/Vue.svg').default,
    description: (
      <>
        Teigi が生成するWeb UI は Vue.js を使用して SPA として実装されます。
        SPAではブラウザによるページ遷移を行わずにコンテンツの切り替えなどを行うことで、ユーザー体験（UX）を大きく向上させることができます。 
     </>
    ),
  },
  {
    title: '高性能',
    Svg: require('@site/static/img/APISIX.svg').default,
    description: (
      <>
        ロジックを Apache APISIX 上で実装することで高い性能を実現します。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
