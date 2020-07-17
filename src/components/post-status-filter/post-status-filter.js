import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './post-status-filter.scss';

const PostStatusFilter = () => {
    return (
        <ButtonGroup>
            <Button color="info">Все</Button>
            <Button outline color="secondary">Понравилось</Button>
        </ButtonGroup>
    )
}

export default PostStatusFilter;
