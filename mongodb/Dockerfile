FROM mongo:4.2.10

RUN apt update -y
RUN apt install -y cron
RUN mkdir -p /cronsh
COPY ./cron/cronsh/dbbackup.sh /cronsh/
COPY ./cron/cron.d/dbbackup /etc/cron.d/
RUN chmod 777 /cronsh/dbbackup.sh

CMD bash -c "service cron start && docker-entrypoint.sh 'mongod'"
