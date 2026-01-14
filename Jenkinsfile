// =========================================================
// [Jenkinsfile] - 빌드 및 Harbor 전송 (Watchtower 연동)
// + SonarQube 기능이 주석으로 숨겨져 있음
// =========================================================

pipeline {
    agent any

    environment {
        // [기본 설정] Harbor 정보 (필수)
        HARBOR_URL      = 'harbor.nangman.cloud'
        HARBOR_PROJECT  = 'library'
        HARBOR_CREDS_ID = 'harbor-auth'

        // -------------------------------------------------
        // [FUTURE] 소나큐브 설정 (나중에 주석 해제하여 사용)
        // Jenkins 관리 -> System Configuration에서 설정한 이름과 같아야 함
        // -------------------------------------------------
        // SONAR_SERVER    = 'my-sonarqube-server' 
        // SONAR_SCANNER   = 'my-sonar-scanner' 
    }

    stages {
        // 1단계: 레포지토리 이름 및 태그 설정
        stage('Initialize') {
            steps {
                script {
                    // 예: 'nangman-infra/chulsu-web/main' -> 'chulsu-web' 추출
                    def jobNameParts = env.JOB_NAME.split('/')
                    env.REPO_NAME = jobNameParts[1].toLowerCase()
                    env.IMAGE_TAG = "v${env.BUILD_NUMBER}"
                    echo "타겟: ${env.REPO_NAME} / 태그: ${env.IMAGE_TAG}"
                }
            }
        }

        // -------------------------------------------------
        // [FUTURE] 2단계: 소나큐브 코드 품질 검사 (현재 봉인됨)
        // 나중에 사용하려면 아래의 '/*' 와 '*/' 를 지우세요.
        // -------------------------------------------------
        /* stage('SonarQube Analysis') {
            steps {
                script {
                    echo "소나큐브 검사 시작..."
                    def scannerHome = tool name: "${env.SONAR_SCANNER}", type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                    
                    withSonarQubeEnv("${env.SONAR_SERVER}") {
                        // 소나큐브 스캐너 실행
                        // -Dsonar.projectKey : 프로젝트 식별키 (레포 이름 자동 사용)
                        // -Dsonar.sources=.  : 현재 폴더의 모든 코드 검사
                        sh "${scannerHome}/bin/sonar-scanner \
                           -Dsonar.projectKey=${env.REPO_NAME} \
                           -Dsonar.sources=. \
                           -Dsonar.host.url=http://소나큐브주소:9000 \
                           -Dsonar.login=소나큐브토큰_또는_자동설정"
                    }
                }
            }
        }
        
        // (선택사항) 품질 게이트: 점수 미달 시 빌드 중단시키는 기능
        // stage("Quality Gate") {
        //     steps {
        //         timeout(time: 1, unit: 'HOURS') {
        //             waitForQualityGate abortPipeline: true
        //         }
        //     }
        // }
        */

        // 3단계: 도커 이미지 빌드
        stage('Docker Build') {
            steps {
                script {
                    echo "Docker Image 빌드 중..."
                    // 버전 관리용 & Watchtower용(latest) 두 가지 태그 생성
                    sh "docker build -t ${HARBOR_URL}/${HARBOR_PROJECT}/${env.REPO_NAME}:${env.IMAGE_TAG} ."
                    sh "docker build -t ${HARBOR_URL}/${HARBOR_PROJECT}/${env.REPO_NAME}:latest ."
                }
            }
        }

        // 4단계: Harbor로 전송 (Push)
       stage('Push to Harbor') {
            steps {
                script {
                    echo "Harbor로 이미지 전송 중..."
                    withCredentials([usernamePassword(credentialsId: HARBOR_CREDS_ID, passwordVariable: 'PW', usernameVariable: 'USER')]) {
                        // 쉘 스크립트 블록 시작 (Triple Double Quotes 사용)
                        sh """
                            # 1. 로그인: echo와 파이프(|)를 사용해 입력하고, $ 기호 앞에 역슬래시(\\)를 붙여 쉘 변수로 처리합니다.
                            echo \$PW | docker login ${HARBOR_URL} -u \$USER --password-stdin
                            
                            # 2. 연속 푸시: 하나의 sh 블록 안에서 실행되므로 로그인 세션이 절대 끊기지 않습니다.
                            docker push ${HARBOR_URL}/${HARBOR_PROJECT}/${env.REPO_NAME}:${env.IMAGE_TAG}
                            docker push ${HARBOR_URL}/${HARBOR_PROJECT}/${env.REPO_NAME}:latest
                            
                            # 3. 로그아웃
                            docker logout ${HARBOR_URL}
                        """
                    }
                }
            }
        }
    }

    // 빌드 후 로컬 이미지 청소
    post {
        always {
            sh "docker rmi ${HARBOR_URL}/${HARBOR_PROJECT}/${env.REPO_NAME}:${env.IMAGE_TAG} || true"
            sh "docker rmi ${HARBOR_URL}/${HARBOR_PROJECT}/${env.REPO_NAME}:latest || true"
        }
    }
}
