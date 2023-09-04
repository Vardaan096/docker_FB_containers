pipeline {
    agent any

    environment {
        SSHUSERNAME = "ubuntu"
        SCRIPTPATH = "/home/antino/Desktop/jenkins/project"
        IP = "54.196.121.38"
        CREDENTIAL_ID = "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"
    }

    stages {
        stage('Build Deploy') {
            steps {
                script {
                    // Load the SSH private key credential
                    withCredentials([file(credentialsId: CREDENTIAL_ID, variable: 'SSH_KEY')]) {
                        // SSH into the EC2 instance and deploy your application
                        sh """
                        ssh -o StrictHostKeyChecking=no -i \$SSH_KEY ${SSHUSERNAME}@${IP} 'cd ${SCRIPTPATH} && bash -x docker_shell_script.sh 2>&1'
                        """
                    }
                }
            }
        }
    }
}

