import React from 'react';
import { SingleItem } from './SingleItem';

const Repositories = ({ repos, status }) => {
    if (status === 'Loading') {
        return <h2>Loading GitHub repositories...</h2>;
    }
    return (
        <div>
            {
                repos.length === 0 && status !== 'Loading' ? <h2>For your query we didn't find any repo...</h2> :
                    repos.map(repo => <SingleItem
                        key={repo.id}
                        url={repo.owner.avatar_url}
                        author={repo.owner.login}
                        language={repo.language}
                        name={repo.name}
                        desc={repo.description}
                        stars={repo.stargazers_count}
                        watchers={repo.watchers} />
                    )}
        </div>
    );
};

export default Repositories;