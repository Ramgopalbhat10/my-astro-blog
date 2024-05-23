---
title: "Setup a new GCP VM"
description: "How to setup a new GCP virtual machine instance and install tools/packages to get up and running with a dev environment"
date: "May 23 2024"
---

#### 1. Create a VM instance from GCP console
Create a suitable instance from the list of available regions and instance type. Below is an example of an instance created asia-south1(Mumbai) region.

| Attribute    | Value                |
| ------------ | -------------------- |
| Region       | asia-south1 (Mumbai) |
| Zone         | asia-south1-a        |
| Machine      | General purpose      |
| Series       | E2                   |
| Machine type | CUSTOM               |
| Cores        | 2, 8 vCPU            |
| Memory       | 4, 32 GB             |

#### 2. Create ssh keygen
Create an ssh key pair which will be used to access the vm using a private key. Below is the command.
```bash
ssh-keygen -t rsa -f ~/.ssh/gcp_vm -C jarvis -b 2048
```
Add the public ssh key in the vm instance under security section.

#### 3. Login to server via ssh
To login into the newly created vm, use the generated ssh public key with user and vm's IP address.
```bash
ssh -i ~/.ssh/gcp_vm jarvis@[vm-ip]
```
#### 4. Configure package manager Homebrew
In Linux there are many ways to install packages and software's. We can use Homebrew as package manager which will be easy to deal with while installing most of the software's and packages.
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After successful installation, run the below two commands to add Homebrew to your PATH.
```bash
(echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /home/jarvis/.profile
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```

You can run additional commands to install Homebrew's dependencies.
```bash
sudo apt-get install build-essential
brew install gcc
```

From here on we will be installing all the required software's using Homebrew. Any unsupported packages will be installed manually.
```bash
brew install <package>
```

#### 5. Install fish shell
Fish is a smart and user-friendly command line shell for Linux.
```bash
brew install fish
```

Install Oh My Fish package to extend and modify the look of your shell.
```bash
curl https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install | fish
```

Install the neolambda theme to change the look.
```shell
omf install neolambda
```

#### 6. Install nvm and node v18
nvm is a version management tool for installing node.js. We can install multiple versions of node and switch between them.
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Now add these lines to your `~/.bashrc`, `~/.profile`, or `~/.zshrc` file to have it automatically sourced upon login:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Switch to bash shell and install node v18.
```bash
nvm install 18.16.0
```

#### 7. Install pnpm
pnpm is fast, disk space efficient package manager.
```bash
brew install pnpm
```

#### 8. Install openjdk@17
Development kit for the Java programming language.
```bash
brew install openjdk@17
```

For setting the path, run the below command and source the profile file.
```bash
echo 'export PATH="/home/linuxbrew/.linuxbrew/opt/openjdk@17/bin:$PATH"' >> ~/.profile
source ~/.profile
```

#### 9. Install gradle and maven
Gradle:
Open-source build automation tool based on the Groovy and Kotlin DSL
```bash
brew install gradle
```

Maven:
Java-based project management
```bash
brew install maven
```

#### 10. Install docker and docker-compose
Installing docker and docker-compose is a bit tricky in ubuntu and linux machines. Below are the steps to follow.

Installing Docker:
1. Firstly, it's important to update the packages on the machine. Use the following command.
```bash
sudo apt update && sudo apt upgrade -y
```

2. Install necessary packages.
```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

3. Add docker GPG key.
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

4. Then add the Docker repository with the `signed-by` option.
```bash
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

5. Update package lists again.
```bash
sudo apt update
```

6. Now install docker.
```bash
sudo apt install docker-ce
```

7. To verify Docker has been installed correctly, run below command.
```bash
docker version
```

8. Enable docker to start on boot.
```bash
sudo systemctl enable docker
```

Installing Docker-compose:
1. Download the docker-compose binary from the compose repository release page on Github.
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.18.0/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose
```

2.  Apply executable permissions to the downloaded binary.
```bash
sudo chmod +x /usr/local/bin/docker-compose
```

3. To verify Docker Compose has been installed correctly, run below command.
```bash
docker-compose --version
```

By default, Docker requires administrator privileges. If you want to run Docker commands as a non-root user without prepending `sudo`, add your user to the `docker` group.
```bash
sudo usermod -aG docker ${USER}
```