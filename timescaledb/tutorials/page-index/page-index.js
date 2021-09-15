module.exports = [
  {
    title: 'Tutorials',
    href: 'tutorials',
    children: [
      {
        title: 'Introduction to IoT',
        href: 'nyc-taxi-cab',
        tags: ['iot', 'query', 'learn', 'tsc'],
<<<<<<< HEAD
        keywords: ['IoT', 'tutorial', 'Timescale Cloud'],
=======
        keywords: ['IoT', 'tutorial', 'Timescale Forge'],
>>>>>>> origin/latest
        excerpt: 'An introduction to IoT using NYC taxi data',
      },
      {
        title: 'Introduction to time-series forecasting',
        href: 'time-series-forecast',
        tags: ['r', 'analyze', 'learn', 'timescaledb'],
        keywords: ['r', 'tutorial', 'TimescaleDB'],
        excerpt:
          'An introduction to time-series forecasting using NYC taxi data',
      },
      {
        title: 'Analyze cryptocurrency data',
        href: 'analyze-cryptocurrency-data',
        tags: ['cryptocurrency', 'finance', 'analyze', 'learn', 'timescaledb'],
        keywords: ['cryptocurrency', 'finance', 'tutorial', 'TimescaleDB'],
        excerpt: 'Use TimescaleDB to analyze cryptocurrency data',
      },
      {
        title: 'Analyze intraday stock data',
        href: 'analyze-intraday-stocks',
        tags: ['finance', 'analyze', 'learn', 'timescaledb'],
        keywords: ['finance', 'tutorial', 'TimescaleDB'],
        excerpt: 'Analyze intraday stock data with TimescaleDB',
        children: [
          {
            title: 'Design database schema',
            href: 'design-schema',
            tags: ['finance', 'create', 'learn', 'timescaledb'],
            keywords: ['finance', 'tutorial', 'TimescaleDB'],
            excerpt:
              'Design a database schema for intraday stock data analysis',
          },
          {
            title: 'Fetch and ingest stock data',
            href: 'fetch-and-ingest',
            tags: ['finance', 'ingest', 'learn', 'timescaledb'],
            keywords: ['finance', 'tutorial', 'TimescaleDB'],
            excerpt: 'Fetch and ingest stock data using TimescaleDB',
          },
          {
            title: 'Explore stock market data',
            href: 'explore-stocks-data',
            tags: ['finance', 'analyze', 'learn', 'timescaledb'],
            keywords: ['finance', 'tutorial', 'TimescaleDB'],
            excerpt: 'Explore stock market data with TimescaleDB',
          },
        ],
      },
      {
        title: 'Analyze data using hyperfunctions',
        href: 'nfl-analytics',
        tags: ['hyperfunctions', 'analyze', 'learn', 'timescaledb'],
        keywords: ['hyperfunctions', 'tutorial', 'TimescaleDB'],
        excerpt: 'Analyze NFL data using TimescaleDB',
        children: [
          {
            title: 'Ingest and query data',
            href: 'ingest-and-query',
            tags: ['hyperfunctions', 'ingest', 'query', 'learn', 'timescaledb'],
            keywords: ['hyperfunctions', 'tutorial', 'TimescaleDB'],
            excerpt: 'Ingest and query NFL data with TimescaleDB',
          },
          {
            title: 'Analyze data using SQL and hyperfunctions',
            href: 'advanced-analysis',
            tags: ['hyperfunctions', 'analyze', 'learn', 'timescaledb'],
            keywords: ['hyperfunctions', 'tutorial', 'TimescaleDB'],
            excerpt:
              'Analyze NFL data using SQL and hyperfunctions in TimescaleDB',
          },
          {
            title: 'Join time-series and relational data',
            href: 'join-with-relational',
            tags: ['hyperfunctions', 'analyze', 'learn', 'timescaledb'],
            keywords: ['hyperfunctions', 'tutorial', 'TimescaleDB'],
            excerpt: 'Join time-series and relational NFL data in TimescaleDB',
          },
          {
            title: 'Visualize time-series data',
            href: 'play-visualization',
            tags: ['hyperfunctions', 'visualize', 'learn', 'timescaledb'],
            keywords: ['hyperfunctions', 'visualize', 'tutorial', 'TimescaleDB'],
            excerpt: 'Visualize NFL data with TimescaleDB',
          },
        ],
      },
      {
        title: 'Getting started with Promscale',
        href: 'promscale',
        tags: ['promscale', 'prometheus', 'learn', 'timescaledb'],
        keywords: ['Promscale', 'Prometheus', 'tutorial', 'TimescaleDB'],
        excerpt: 'Learn about Promscale with TimescaleDB',
        children: [
          {
            title: 'The Benefits of using Promscale',
            href: 'promscale-benefits',
            tags: ['promscale', 'prometheus', 'learn', 'timescaledb'],
            keywords: ['Promscale', 'Prometheus', 'tutorial', 'TimescaleDB'],
            excerpt: 'Explore the benefits of using Promscale',
          },
          {
            title: 'How Promscale works',
            href: 'promscale-how-it-works',
            tags: ['promscale', 'prometheus', 'learn', 'timescaledb'],
            keywords: ['Promscale', 'Prometheus', 'tutorial', 'TimescaleDB'],
            excerpt: 'Learn how Promscale works',
          },
          {
            title: 'Installing Promscale',
            href: 'promscale-install',
            tags: ['promscale', 'prometheus', 'install', 'learn', 'timescaledb'],
            keywords: ['Promscale', 'Prometheus', 'tutorial', 'TimescaleDB'],
            excerpt: 'Install Promscale',
          },
          {
            title: 'Run queries with PromQL and SQL',
            href: 'promscale-run-queries',
            tags: ['promscale', 'prometheus', 'query', 'learn', 'timescaledb'],
            keywords: ['Promscale', 'Prometheus', 'tutorial', 'TimescaleDB'],
            excerpt: 'Query your data using PromQL and SQL in Promscale',
          },
        ],
      },
      {
        title: 'Monitor Timescale Cloud with Prometheus',
        href: 'setting-up-timescale-cloud-endpoint-for-prometheus',
        tags: ['prometheus', 'monitor', 'learn', 'timescaledb'],
        keywords: ['Promscale', 'Prometheus', 'tutorial', 'TimescaleDB'],
        excerpt: 'Monitor Timescale Cloud with Prometheus',
      },
      {
        title: 'Monitor a Django application with Prometheus',
        href: 'monitor-django-with-prometheus',
        tags: ['prometheus', 'django', 'monitor', 'learn', 'timescaledb'],
        keywords: ['Prometheus', 'Django', 'tutorial', 'TimescaleDB'],
        excerpt: 'Monitor a Django application with Prometheus',
      },
      {
        title: 'Collect metrics with Telegraf',
        href: 'telegraf-output-plugin',
        tags: ['telegraf', 'monitor', 'learn', 'timescaledb'],
        keywords: ['Telegraf', 'tutorial', 'TimescaleDB'],
        excerpt: 'Collect metrics with Telegraf',
      },
      {
        title: 'Grafana',
        href: 'grafana',
        tags: ['grafana', 'visualize', 'learn', 'timescaledb'],
        keywords: ['Grafana', 'tutorial', 'TimescaleDB'],
        excerpt: 'Getting Started with Grafana and TimescaleDB',
        children: [
          {
            title: 'Install Grafana',
            href: 'installation',
            tags: ['grafana', 'visualize', 'install', 'learn', 'timescaledb'],
            keywords: ['Grafana', 'tutorial', 'TimescaleDB'],
            excerpt: 'Learn how to install Grafana',
          },
          {
            title: 'Create a dashboard and panel',
            href: 'create-dashboard-and-panel',
            tags: ['grafana', 'visualize', 'create', 'learn', 'timescaledb'],
            keywords: ['Grafana', 'tutorial', 'TimescaleDB'],
            excerpt:
              'Create a dashboard and panel with Grafana and TimescaleDB',
          },
          {
            title: 'Build Geospatial dashboards',
            href: 'geospatial-dashboards',
            tags: ['grafana', 'visualize', 'create', 'learn', 'timescaledb'],
            keywords: ['Grafana', 'tutorial', 'TimescaleDB'],
            excerpt: 'Build Geospatial dashboards with Grafana and TimescaleDB',
          },
          {
            title: 'Use Grafana variables',
            href: 'grafana-variables',
            tags: ['grafana', 'visualize', 'manage', 'learn', 'timescaledb'],
            keywords: ['Grafana', 'tutorial', 'TimescaleDB'],
            excerpt: 'Use Grafana variables with TimescaleDB',
          },
          {
            title: 'Visualize missing data',
            href: 'visualize-missing-data',
            tags: ['grafana', 'visualize', 'manage', 'learn', 'timescaledb'],
            keywords: ['Grafana', 'tutorial', 'TimescaleDB'],
            excerpt: 'Visualize missing data in Grafana with TimescaleDB',
          },
          {
            title: 'Setup alerts',
            href: 'setup-alerts',
            tags: ['grafana', 'visualize', 'alert', 'learn', 'timescaledb'],
            keywords: ['Grafana', 'tutorial', 'TimescaleDB'],
            excerpt: 'Setup alerts in Grafana with TimescaleDB',
          },
        ],
      },
      {
        title: 'Visualize data in Tableau',
        href: 'visualize-with-tableau',
        tags: ['tableau', 'visualize', 'learn', 'timescaledb'],
        keywords: ['Tableau', 'tutorial', 'TimescaleDB'],
        excerpt: 'Visualize data in Tableau with TimescaleDB',
      },
      {
        title: 'Custom TimescaleDB dashboards',
        href: 'custom-timescaledb-dashboards',
        tags: ['tableau', 'visualize', 'create', 'timescaledb'],
        keywords: ['Tableau', 'tutorial', 'TimescaleDB'],
        excerpt: 'Custom TimescaleDB dashboards in Tableau',
      },
      {
        title: 'Simulate IoT Sensor Data',
        href: 'simulate-iot-sensor-data',
        tags: ['tableau', 'iot', 'visualize', 'learn', 'timescaledb'],
        keywords: ['Tableau', 'tutorial', 'IoT', 'TimescaleDB'],
        excerpt: 'Simulate IoT Sensor Data with TimescaleDB',
      },
      {
        title: 'TimescaleDB with AWS Lambda',
        href: 'aws-lambda',
        tags: ['lambda', 'learn', 'timescaledb'],
        keywords: ['AWS Lambda', 'tutorial', 'TimescaleDB'],
        excerpt: 'Tutorial for using TimescaleDB with AWS Lambda',
        children: [
          {
            title: 'Create a data API for TimescaleDB',
            href: 'create-data-api',
            tags: ['lambda', 'data', 'learn', 'timescaledb'],
            keywords: ['AWS Lambda', 'tutorial', 'TimescaleDB'],
            excerpt: 'Create a data API for TimescaleDB with AWS Lambda and API Gateway',
          },
          {
            title: 'Pull and ingest data from a third party API',
            href: '3rd-party-api-ingest',
            tags: ['lambda', 'data', 'ingest', 'learn', 'timescaledb'],
            keywords: ['AWS Lambda', 'tutorial', 'TimescaleDB'],
            excerpt: 'Pull and ingest data from a third party into TimescaleDB with AWS Lambda',
          }
        ],
      },
      {
        title: 'Sample datasets',
        href: 'sample-datasets',
        tags: ['data', 'learn', 'timescaledb'],
        keywords: ['tutorial', 'Tableau', 'TimescaleDB'],
        excerpt: "Sample datasets for Tableau and TimescaleDB"
      },
    ],
  },
];
