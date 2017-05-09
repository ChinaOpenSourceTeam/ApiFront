#!/bin/bash
npm install
ng build 
nginx -s reload
