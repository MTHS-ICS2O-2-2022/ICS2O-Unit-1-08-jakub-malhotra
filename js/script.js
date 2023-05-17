// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-1-08-jakub-malhotra/sw.js", {
    scope: "/ICS2O-Unit-1-08-jakub-malhotra/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  alert("Hello, World!")
}
