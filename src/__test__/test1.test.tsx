import {describe, test, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import App from '../App'

describe ('First test', ()=>{
    test('should show intro', ()=>{
        render(<App />)

        expect(screen.getByText('Hello world')).toBeDefined()
    })
})