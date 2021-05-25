module.exports = {
  apps: [{
    name: 'RemoteReq',
    script: './server/server.js',
  }],
  deploy: {
    production: {
      key: '/home/ryden/.ssh/Heavy-Storm.pem',
      user: 'ubuntu',
      host: '3.142.73.19',
      ref: 'origin/master',
      repo: 'git@github.com:RemoteReq/Employer-Domain.git',
      path: '/home/ubuntu/employer',
      'pre-deploy-local': "echo 'beginning production deployment'",
      'post-setup': 'npm --version,',
      'post-deploy': 'npm install && npm run build:pro && pm2 startOrRestart ecosystem.config.js --env production',
    },
    staging: {
      key: '/home/ryden/.ssh/Heavy-Storm.pem',
      user: 'ubuntu',
      host: '3.143.222.9',
      ref: 'origin/staging',
      repo: 'git@github.com:RemoteReq/Employer-Domain.git',
      path: '/home/ubuntu/employer',
      'pre-deploy-local': "echo 'beginning staging deployment'",
      'post-deploy': 'npm install && npm run build:dev && pm2 startOrRestart ecosystem.config.js --env staging',
    },
  },
};
