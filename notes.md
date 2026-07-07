Problems I faced
1. Variable name mismatch

Error:

countlabel is not defined

Problem:
I created the variable with this name:

counteLabel

but I used another name:

countlabel

What I learned:
JavaScript is case-sensitive. Variable names must be exactly the same.

2. Wrong property name

Error:

textcontent is not working

Problem:
I wrote:

textcontent

but the correct property is:

textContent

What I learned:
JavaScript properties also depend on uppercase and lowercase letters.

3. GitHub push error (fetch first)

Error:

rejected main -> main (fetch first)

Problem:
The GitHub repository had changes that were not in my local project.

Solution:

git pull origin main --rebase

then:

git push

What I learned:
Before pushing, local and remote repositories need to be synchronized.

4. Git identity error

Error:

Please tell me who you are

Problem:
Git did not know my username and email.

Solution:

git config --global user.name "username"
git config --global user.email "email"

What I learned:
Git uses my identity to record commits.

5. SSL certificate error

Error:

SSL certificate verification failed

Problem:
Linux could not verify GitHub's SSL certificate.

Solution:
Updated the system certificates.

What I learned:
HTTPS connections depend on trusted certificates.
