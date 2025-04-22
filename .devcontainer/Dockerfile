FROM mcr.microsoft.com/devcontainers/universal:2-linux
# Install the xz-utils package
# 1) Update apt and install prerequisites
RUN apt-get update && \
    apt-get install -y curl build-essential

# 2) Install Node.js (for Vue)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# 3) Install the Vue CLI globally
RUN npm install -g @vue/cli

# 4) Install Python3 and pip
RUN apt-get install -y python3 python3-pip

# 5) Install Flask
RUN pip3 install flask

# 6) Clean up apt to reduce image size
RUN apt-get clean && rm -rf /var/lib/apt/lists/*