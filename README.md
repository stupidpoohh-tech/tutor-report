# 지우 영어 학습 보고서

모바일 우선의 순수 HTML/CSS/JavaScript 정적 사이트입니다. 13개 섹션, 가로 스텝 목차, 이전/다음 탐색, 인쇄 스타일을 포함합니다. 외부 라이브러리나 빌드 과정이 필요하지 않습니다. JavaScript를 꺼도 전체 본문과 목차 링크를 읽을 수 있습니다.

## 로컬 확인

- `index.html`을 브라우저에서 바로 엽니다.
- 또는 Node.js가 있다면 저장소에서 `node preview.cjs` 실행 후 http://localhost:4173 에 접속합니다. 종료는 Ctrl+C입니다.
- 360px 모바일 및 데스크톱에서 목차, 이전/다음, 브라우저 뒤로 가기, 두 학습 사이트 링크와 인쇄 화면을 확인합니다.

## Cloudflare Pages

Git 저장소 `stupidpoohh-tech/tutor-report` 연결 후 다음 설정을 사용합니다.

| 설정 | 값 |
| --- | --- |
| Framework preset | None |
| Production branch | main |
| Root directory | 비워 둠 (저장소 루트) |
| Build command | 없음 / 비워 둠. 명시적으로 요구하면 `exit 0` |
| Build output directory | `.` (index.html이 있는 저장소 루트) |
| 환경 변수 | 필요 없음 |

배포 설정은 [Cloudflare 정적 HTML 안내](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) 및 [빌드 설정](https://developers.cloudflare.com/pages/configuration/build-configuration/)을 참고합니다. 배포 주소: https://tutor-report.pages.dev . GitHub main 변경 시 자동으로 운영 배포됩니다.

## 이미지 작업 상태 — 미완료

제공된 작업 폴더, 연결된 이전 대화 및 빈 GitHub 저장소에서 원본 첨부 파일을 찾을 수 없었습니다. 실제 이미지 대신 확인 대기 영역을 표시했습니다. 가짜 시험지나 임의의 답안을 생성하지 않았습니다.

필요한 원본: 지난 기말 IMG_5175~5179, 이번 중간 IMG_5259~5264.

추가로 전달받은 `이번.zip`, `지난.zip`은 지정된 OneDrive 바탕 화면 경로에 존재하지 않아 열지 못했습니다. 실제 파일을 전달받은 뒤 아래 작업이 필요합니다.

1. 원본을 직접 확인해 지난 기말 서술형 미작성 / 이번 중간 서술형 시도 영역을 선정합니다.
2. The Dot, Bridge, Self-discovery의 실제 밑줄·근거 표시를 확인합니다. 사진이 뒷받침하지 않는 설명은 수정합니다.
3. 학생 식별 정보와 불필요한 여백을 제외하여 해당 부분만 크롭하고 `assets/`에 저장합니다. 보고서에는 필요한 크롭 이미지만 연결합니다.
4. 06~08절의 `.image-pending` 요소를 실제 `<img>`로 교체하고 원본 파일명·크롭 영역을 기록합니다. 이미지에는 width/height, 의미 있는 alt, loading="lazy"를 지정합니다.
5. 원본 확인 대기 안내를 제거하고 관찰된 사실만 캡션으로 적습니다.

`noindex` 및 `_headers`는 검색 노출을 줄이기 위한 설정이며 접근 제한 기능은 아닙니다. 현재 GitHub 저장소는 공개 상태입니다. 사진까지 포함한 비공개 전달이 필요하면 저장소와 Pages 접근 설정도 맞춰야 합니다.

## 파일

- `index.html`: 보고서 본문 및 탐색 구조
- `style.css`: 반응형·인쇄·접근성 스타일
- `script.js`: 현재 섹션 표시와 이전/다음 탐색
- `preview.cjs`: 의존성 없는 로컬 미리보기 서버
- `_headers`, `robots.txt`: 검색 색인 제외 설정

일정 8회에는 9/21 결강이 포함되어 실제 진행은 7회입니다. 점수 19→21은 2점 상승으로만 표현하며, 사진 증거는 원본 수령 전까지 검증되지 않은 상태임을 본문에서도 명시합니다.

## 검증 및 전달 상태

- JavaScript 구문 검사 통과.
- 브라우저에서 13개 섹션, 두 외부 링크 주소, 다음 섹션 이동, 마지막 섹션의 다음 버튼 비활성화 확인.
- 360px, 390px, 1280px 화면에서 가로 페이지 넘침 없음 확인.
- 학생 설문 제외. 확인되지 않은 태도·독해력 향상 주장은 삭제.
- 로컬 미리보기 구현 완료. 이미지 크롭 및 원본 대조 미완료.
- 사용자가 공개 GitHub 반영 및 Cloudflare 배포를 승인함.

## 디자인

화이트 배경과 Pretendard 가변 글꼴을 사용합니다. 글꼴을 불러오지 못하면 시스템 글꼴로 표시합니다. 모바일에는 가로 목차, PC에는 고정 측면 목차를 제공합니다.

시험지 원본은 GitHub에 업로드 후 경로를 알려 주면 원본을 대조하여 필요한 부분만 크롭하고 보고서에 연결할 수 있습니다. 파일 업로드만으로 비교 캡션이 자동 생성되지는 않습니다.
