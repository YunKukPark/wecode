# Git

## 단방향 흐름
> `init`(.git파일 생성) -> `remote add origin`(원격 저장소 연결) -> (local에서 여러가지 일 하기) -> `add` (변경사항 기록할거에요 하는 스테이지에 올림) -> `commit` (변경 사항 기록) -> `push` (원격 저장소로 commit 내역 발사) 

## 브런치 흐름
> `git checkout -b <만들브런치명>` -> (브런치에서 여러가지 일 하기) -> `...... push` -> `PR 작성` -> (승인 후 Master branch에 부착) -> 로컬에서는 마스터 브런치에 있는거 pull 로 땡겨오기 -> 다시 브런치 쪽으로 가서 `git merge` 로 타 브런치들 마스터내용으로 동기화


## 각 명령어 추가 설명
|명령어|설명|
|--|--|
|`init`|.git 파일 생성|
|`remote add origin`|원격 저장소에 연결|
|`add`|변경사항 기록할래요~ 하는 파일 스테이지에 올리기|
|`commit`|변경 사항 기록|
|`push`|원격 저장소로 commit 내역 발사|
|`checkout -b <만들브런치명>`|branch 만들고 그쪽으로 이동|

