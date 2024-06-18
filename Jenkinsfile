pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    git credentialsId: 'gittocken', url: 'https://github.com/Hmimi97/jet_tours_oky.git', branch: 'main'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                    bat 'npm install playwright@latest'
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
            publishHTML([
                reportName: 'Playwright Test Report',
                reportDir: 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\jettoursplaywright\\playwright-report\\',
                reportFiles: 'index.html',
                alwaysLinkToLastBuild: true,
                keepAll: true,
                allowMissing: false
            ])
        }
    }
}
