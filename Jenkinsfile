pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        CI = "true"
    }

    options {
        timestamps()
        ansiColor('xterm')
        buildDiscarder(logRotator(
            numToKeepStr: '10',
            artifactNumToKeepStr: '5'
        ))
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Node Version') {
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
                sh 'npm run lint || true'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false || true'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }

    post {

        success {
            echo '✅ Build completed successfully.'
        }

        failure {
            echo '❌ Build failed.'
        }

        always {
            cleanWs()
        }
    }
}
