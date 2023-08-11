import React from 'react'

import '@testing-library/jest-dom'

global.React = React

// Reference:
// https://stackoverflow.com/questions/64558062/how-to-mock-resizeobserver-to-work-in-unit-tests-using-react-testing-library
// Alternative: use `resize-observer-polyfill` npm package
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))
