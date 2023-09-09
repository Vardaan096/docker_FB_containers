pipeline {
    agent any

    environment {
        SSHUSERNAME = "ubuntu"
        SCRIPTPATH = "/var/lib/jenkins/workspace/docker"
        IP = "3.90.173.138"
    }

    stages {
        stage('Build Deploy') {
            steps {
                script {
                    // Load the SSH private key credential
                    sshagent (credentials: ['Antino_Vardaan']) {
                        // SSH into the EC2 instance and deploy your application
                        sh """
                        ssh -o StrictHostKeyChecking=no ${SSHUSERNAME}@${IP} 'cd ${SCRIPTPATH} && bash -x docker_shell_script.sh 2>&1'
                        """
                    }
                }
            }
        }
    }
}

