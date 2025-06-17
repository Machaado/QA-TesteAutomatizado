pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Cypress tests') {
            steps {
                bat 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress\\videos\\**\\*.mp4', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress\\screenshots\\**\\*.png', allowEmptyArchive: true

            // Reportando build info para o Jira.
            jiraSendBuildInfo site: 'primeira_conexao_jira_com_jenkins'
        }
    }
}

