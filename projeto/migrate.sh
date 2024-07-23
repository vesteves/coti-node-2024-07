#!/bin/bash

if [ -z "$1" ]
then
  echo "Error: No migration name provided"
  exit 1
fi

npx prisma migrate dev --name "$1"
