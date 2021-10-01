import profileReduser, {addPostActionCreator} from "./profileReduser";
import { render, screen } from '@testing-library/react';
import App from './App';

test('new post should be added', () => {
    // render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();

    let state = {
        postData: [
            {id: 1, post: 'hi', likeCount: 6},
            {id: 2, post: 'my first post', likeCount: 4},
            {id: 3, post: 'okay', likeCount: 1}
        ]
    }
    let action = addPostActionCreator("New post");
    let newState = profileReduser(state, action);

    expect(newState.postData.length).toBeInTheDocument(4);
});


