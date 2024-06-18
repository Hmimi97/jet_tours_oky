pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    git credentialsId: 'testjenkins', url: 'https://github.com/DjamelYousfi25/Jet_tours.git', branch: 'main'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                    bat 'npm install playwright@latest'
                    bat 'npx playwright install msedge'

                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    bat 'npx playwright test --workers=1'
                }
            }
        }
  
    }
     post {
        always {
            publishHTML([[
                reportName: 'Playwright Test Report',
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                alwaysLinkToLastBuild: true,
                keepAll: true,
                allowMissing: false
            ]])
        }
    }
}
