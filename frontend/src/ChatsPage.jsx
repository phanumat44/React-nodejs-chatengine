import { PrettyChatWindow } from 'react-chat-engine-pretty'
import PropTypes from 'prop-types';
function ChatsPage(props) {

    return (
        <div style={{ height: "100vh" }}>

            <PrettyChatWindow
                projectId="b8cd262f-dcc3-494d-928c-26d3cbc499d3"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

// validate props
ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired,
    }).isRequired,
};


export default ChatsPage