FROM python:3.14-slim

WORKDIR /app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# andy.db is created in the working directory, /data is kept in a volume
RUN useradd --system shorti && mkdir /data && chown shorti /data
WORKDIR /data
USER shorti
ENV PYTHONPATH=/app

EXPOSE 4444

CMD ["gunicorn", "--bind", "0.0.0.0:4444", "--workers", "2", "--access-logfile", "-", "shorti:app"]
