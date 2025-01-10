'use client';
import React, { useState } from 'react';

const TestPage = () => {
  return (
    <div>
        <h3>TestPage 1</h3>
        <button onClick={async () => {
          const _ = (await import('lodash')).default;

          const users = [
            {name:'c'},
            {name:'b'},
            {name:'a'}
          ];

          const sorted = _.orderBy(users, ['name']);
          console.log(`sorted:`)
          console.log(sorted)
        }}>Show</button>
        
    </div>
  )
}

export default TestPage