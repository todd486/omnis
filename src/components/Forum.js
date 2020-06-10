import React from 'react';
import { Switch, Route, Link, useParams, useRouteMatch, useHistory } from 'react-router-dom';

import NotFound from '../components/NotFound';

import '../css/Forum.css';

export default function Forum() {
    let match = useRouteMatch();
    class Frontpage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                topics: [
                    {
                        id: 0,
                        title: "sample topic title",
                        threads: [
                            {
                                id: "204",
                                title: "sample thread title",
                                description: "sample description",
                                replyCount: 0,
                            }
                        ]
                    },
                    {
                        id: 1,
                        title: "Suggestions & Constructive Criticism",
                        threads: [
                            {
                                id: "91",
                                title: "Player vs. Player",
                                description: "Give us your thoughts on our current PvP",
                                replyCount: 23,
                            },
                            {
                                id: "40",
                                title: "Player vs. Environment",
                                description: "Give us your thoughts on our current PvE",
                                replyCount: 1,
                            }
                        ]
                    }
                ],

            };
        }
        render() {
            return (
                <main id="forumFrontpage">
                    <h1>Welcome to the Omnis World Forum!</h1>
                    <div id="forumThreadContainer">
                        {this.state.topics.map((data, index) => (
                            <div className="forumTopic" key={index}>
                                <h2>{data.title}</h2>
                                <div className="threadPostsContainer">
                                    {data.threads.map((subdata, subindex) => (
                                        <Link to={`/forum/thread:${subdata.id}:0`} key={subindex} >
                                            <div className="forumThreadPreview">
                                                <span className="threadTitle">
                                                    <img className="threadIcon" src="" alt=" " />
                                                    <h3>{subdata.title}</h3>
                                                </span>
                                                <div className="threadDescription">{subdata.description}</div>
                                                <i>{`${subdata.replyCount} ${subdata.replyCount !== 1 ? "replies" : "reply"}`}</i>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            );
        }
    }
    function ThreadHandler() {
        let { threadID, index } = useParams();
        let history = useHistory();
        class Post extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    postdata: this.props.data,
                    user: {
                        id: this.props.userID,
                        name: this.props.username,
                        URI: this.props.userURI
                    }
                }
            }
            render() {
                return (
                    <div className="forumPost">
                        <div className="forumPostInfo">
                            <Link className="forumUserInfo" to={`/users:${this.state.user.id}`}> {/* redo this mess to fix css */}
                                <img className="forumUserPic" src={this.state.user.URI} alt="Forum User Icon" />
                                <span className="forumUsername">{this.state.user.name}</span>
                            </Link>
                        </div>
                        <div className="forumPostContent">
                            <article>
                                {this.state.postdata.map((data, index) => (
                                    <section key={index}>
                                        {data.h1 !== null ? <h1>{data.h1}</h1> : null}
                                        {data.text}
                                    </section>
                                ))}
                            </article>
                            <div className="forumPostActions">
                                <button title="Mention this user?" onClick={() => {

                                }}>
                                    <i className="icon-large fas fa-at" />
                                </button>
                                <button title="Quote this post?" onClick={() => {

                                }}>
                                    <i className="icon-large fas fa-quote-right" />
                                </button>
                                <button title="Flag this post?" onClick={() => {

                                }}>
                                    <i className="icon-large fas fa-flag" />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        class Thread extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    id: this.props.id,
                    index: 0,
                    indexMax: 1,
                    content: {
                        user: { name: "sample user 1", URI: "https://picsum.photos/200/300" },
                        postdata: [{ h1: "test", text: "Voluptate excepteur ipsum et qui ullamco commodo cillum officia excepteur sint aliquip aliquip. Qui mollit Lorem anim occaecat velit. Ut do deserunt pariatur cupidatat magna ut excepteur tempor nulla id laboris ad. Mollit deserunt ipsum elit non laboris id duis deserunt velit tempor minim sunt magna nisi. Ullamco qui voluptate et non." }, { text: "multi paragraph test" }]
                    },
                    replies: [{
                        user: { name: "sample user 2", URI: "https://picsum.photos/500/300" }, postdata: [{ text: "Ad ullamco deserunt id minim cupidatat amet sunt quis in do. Qui consectetur eiusmod mollit aliquip velit in dolore. Nostrud tempor deserunt laboris ipsum consectetur sit anim. Irure cillum ut aliquip aliqua esse consectetur dolor incididunt eiusmod adipisicing eu ipsum nisi elit." }]
                    }]
                };
            }
            componentDidMount() {
                this.setState({ index: parseInt(this.props.index) });
            }
            render() {
                return (
                    <div id="threadContainer">
                        <h1>thread title</h1>
                        <Post
                            username={this.state.content.user.name}
                            userURI={this.state.content.user.URI}
                            userID={"5210d125-29f4-4d0b-b21b-d9e0b1a5a20c"} //temp uuid
                            data={this.state.content.postdata}
                        />
                        <div id="forumThreadReplies">
                            {this.state.replies.map((data, index) => (
                                <Post
                                    key={index}
                                    username={data.user.name}
                                    userURI={data.user.URI}
                                    userID={"d29a3f1b-e70a-4fc4-8c82-fdd50165dbf5"} //temp uuid
                                    data={data.postdata}
                                />
                            ))}
                            <ForumTextarea />
                            <div id="replyIndex">
                                <span>Page: {this.state.index}</span>
                                <span>
                                    <button id="forumIndexPrev"
                                        disabled={this.state.index - 1 < 0 ? true : false}
                                        onClick={() => {
                                            let currentIndex = this.state.index;
                                            this.setState({ index: currentIndex - 1 });
                                            history.push(`${match.path}/thread:${threadID}:${currentIndex}`);
                                            //TODO: fix this mess that kinda doesn't work 
                                            //history.push(`${match.path}/thread:${threadID}:${1}`); //this works fine for some reason
                                        }}>
                                        <i className="fas fa-chevron-left" />
                                    </button>
                                    <span>
                                        <i className="icon-small fas fa-circle" />
                                    </span>
                                    <button id="forumIndexNext"
                                        disabled={this.state.index + 1 > this.state.indexMax ? true : false}
                                        onClick={() => {
                                            let currentIndex = this.state.index;
                                            this.setState({ index: currentIndex + 1 });
                                            history.push(`${match.path}/thread:${threadID}:${currentIndex}`);
                                        }}>
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        return (
            <main id="forumThread">
                {/* <header>
                    <button id="forumBack">

                    </button>
                </header> */}
                <Thread id={threadID} index={index} />
            </main>
        );
    }
    return (
        <Switch>
            <Route exact path={`${match.path}/`} component={Frontpage} />
            <Route path={`${match.path}/thread::threadID::index`} component={ThreadHandler} />
            {/*For some reason using a single ':' makes the useParams() hook return `:${threadID}` instead of `${threadID}`. Why using "::" fixes this; I have no idea.*/}
            <Route component={NotFound} />
        </Switch>
    );
}

class ForumTextarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="forumCreatePost">
                <div id="forumTextareaContainer">
                    <div id="forumTextarea">
                        <span>Raw</span>
                        <div id="forumTextareaRaw">
                            <textarea />
                        </div>
                        <span>Preview</span>
                        <div id="forumTextareaFormatted">
                            <i>todo: display formatted post here</i>
                        </div>
                        {/*                        
                                        postdata: { //an article
                                            {
                                                // a section
                                                ?quotePost: [{postIDs}],
                                                ?h1: string,
                                                ?h2: string,
                                                text: {
                                                    ?mention: [{userIDs}],
                                                    raw: string //regex to find @username, and lookup ids
                                                }
                                            }
                                        }
                                        */}
                    </div>
                    <div id="forumTextareaSettings">
                        <button title="Bold">
                            <i className="icon-large fas fa-bold" /></button>
                        <button title="Italics">
                            <i className="icon-large fas fa-italic" /></button>
                        <button title="Insert link">
                            <i className="icon-large fas fa-link" /></button>
                        <button title="Mention someone">
                            <i className="icon-large fas fa-at" /></button>
                        <button title="Quote someone">
                            <i className="icon-large fas fa-quote-right" /></button>
                        <button id="forumSubmit">Sumbit</button>
                    </div>

                </div>
            </div>
        );
    }
}