FROM node:12

# Create app directory
RUN mkdir -p /opt/app
WORKDIR /opt/app

# Add user app
RUN adduser --disabled-password app

# Copy source files to WORKDIR
COPY . .

RUN chown -R app:app /opt/app

# Change execution to user app
USER app
# Install all dependecies
RUN npm install

# Allow access to port 3000 on conainer
EXPOSE 3000

# Run command - start npm server
CMD [ "npm", "start" ]