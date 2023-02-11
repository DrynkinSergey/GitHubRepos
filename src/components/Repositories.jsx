import React from 'react';
import { SingleItem } from './SingleItem';

const Repositories = ({ repos }) => {


    return (
        <div>
            {repos.map(repo => <SingleItem
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