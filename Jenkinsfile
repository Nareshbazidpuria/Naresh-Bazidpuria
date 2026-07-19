pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        CI = 'true'
    }

    options {
        timestamps()
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Environment') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Static Site') {
            steps {
                archiveArtifacts artifacts: 'out/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo '✅ Static site generated successfully.'
        }

        failure {
            echo '❌ Build failed.'
        }

        always {
            cleanWs()
        }
    }
}
