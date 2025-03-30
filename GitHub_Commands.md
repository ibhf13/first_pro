
# GitHub Commands
these are the main commands that we are going to use during the Project phase.

## Only for the first Time
``` bash
git clone https://github.com/ibhf13/first_pro.git
git pull
```
### GitHub setup
``` bash
git config --global user.email YOUR_GITHUB_EMAIL
git config --global user.name YOUR_NAME
```

## preparing Your Branch
``` bash
git switch -c YOUR_NAME_Branch
# only if error occur name already exist use 
git reset --hard
git switch -c YOUR_NAME_Branch
git push
git pull 
```

### when working on a Task use a new branch based on YOUR_NAME_Branch
``` bash
git checkout YOUR_NAME_Branch 
git switch -c YOUR_TASK
git push
git pull 
```

## Adding new Files/ changes to the Branch is done by
``` bash
git add .
git commit -m "Message"
git push
```

### Switching between branches
``` bash
git checkout Branch_Name
git pull 
```

### when error because of a conflict you have to solve the conflict first then
``` bash
git add .
git merge --continue
accept the commit message
git push
git pull
```

## To delete a branch
``` bash
git branch -d 
```

## update the your Branches regularly !!! 
``` bash
git pull origin main  
```

## Pull Requests to merge changes to other branches
... Done together

``` bash
```