#!/bin/bash

INIT_NAME="rnapp"
PROJECT_NAME=""
PROJECT_NAME_LC=""
GIT_USER=$(git config user.name)
GIT_EMAIL=$(git config user.email)

if [ "$GIT_USER" == "" ]
then 
    echo "No Git user found."
    exit;
fi

if [ "$GIT_EMAIL" == "" ]
then 
    echo "No Git mail found."
    exit;
fi

echo ""
echo "A new journey begins, what's the name?:"

read -p "" PROJECT_NAME

PROJECT_NAME_LC=$(echo "$PROJECT_NAME" | tr '[:upper:]' '[:lower:]')

if [ -z "$PROJECT_NAME" ]
then 
    echo "No project's name found. Exiting..."
    exit;
fi

yarn
cd ios && pod install && cd ..

sed -i '' "s/React Native Template/$PROJECT_NAME_LC/g" README.md

echo "Changing package.json name to $PROJECT_NAME_LC..."
sed -i '' "s/${INIT_NAME}/$PROJECT_NAME_LC/g" package.json

echo "Changing Android name to $PROJECT_NAME_LC..."
sed -i '' "s/${INIT_NAME}/$PROJECT_NAME_LC/g" android/app/src/main/res/values/strings.xml

echo "Changing iOS name to $PROJECT_NAME_LC..."
sed -i '' "s/${INIT_NAME}/$PROJECT_NAME_LC/g" "ios/${INIT_NAME}/Info.plist"

echo "Changing iOS launchscreen to $PROJECT_NAME_LC..."
sed -i '' "s/${INIT_NAME}/$PROJECT_NAME_LC/g" "ios/${INIT_NAME}/LaunchScreen.storyboard"

echo "Removing init script"
sed '6d' package.json | tee package.json

git checkout --orphan latest_branch
git add -A
git rm -f starter.sh
git commit -am "chore: initial commit"
git branch -D master
git branch -m master

echo ""
echo "Don't forget to upload to the repository!"
echo ""
echo "## git push -u origin master --force"
echo ""
