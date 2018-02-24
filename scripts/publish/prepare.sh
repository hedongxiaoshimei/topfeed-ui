#!/bin/bash

npm run lint && npm run build && npm run test:jest

if [ $? = 0 ]; then
  rm -rf dist
  