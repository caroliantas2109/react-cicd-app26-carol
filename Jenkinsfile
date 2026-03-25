pipeline {
    agent {
        docker {
            image 'node:20'
            args '-u root:root'
        }
    }

    environment {
        AWS_ACCESS_KEY_ID     = credentials('aws-access-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
        AWS_DEFAULT_REGION    = 'us-east-1'
        S3_BUCKET             = 'carol-react-cicd-2026-160226155782-us-east-1-an'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/caroliantas2109/react-cicd-app26-carol.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Test') {
            steps {
                sh 'CI=true npm test -- --watchAll=false'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Install AWS CLI') {
            steps {
                sh 'apt-get update && apt-get install -y python3 python3-pip'
                sh 'pip3 install awscli'
            }
        }

        stage('Deploy to S3') {
            steps {
                sh 'aws s3 sync build/ s3://$S3_BUCKET --delete'
            }
        }
    }
}