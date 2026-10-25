module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: [
        'http://localhost/index.html',
        'http://localhost/es/index.html',
        'http://localhost/mx/index.html',
        'http://localhost/es/servicios/index.html',
        'http://localhost/mx/servicios/index.html',
        'http://localhost/es/precios/index.html',
        'http://localhost/mx/precios/index.html',
        'http://localhost/es/redes-sociales-clinicas/index.html',
        'http://localhost/mx/manejo-redes-sociales-restaurantes/index.html',
        'http://localhost/es/precio-community-manager/index.html',
        'http://localhost/mx/precio-manejo-redes-sociales/index.html',
      ],
      numberOfRuns: 1,
      settings: {
        formFactor: 'mobile',
        throttlingMethod: 'simulate',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 1 }],
        'categories:seo': ['error', { minScore: 1 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
