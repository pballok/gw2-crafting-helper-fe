import React from 'react';
import { render, screen } from '@testing-library/react';
import Recipe from './Recipe';

test('renders recipe name', () => {
    let testRecipeId = '22';
    render(<Recipe id={testRecipeId} />);
    const nameElement = screen.getByText('Recipe ' + testRecipeId);
    expect(nameElement).toBeInTheDocument();
});
