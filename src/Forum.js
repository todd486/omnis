import React from 'react';
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import './css/Forum.css';

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
        class Post extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    postdata: this.props.data,
                    user: {
                        name: this.props.name,
                        URI: this.props.URI
                    }
                }
            }
            render() {
                return (
                    <div className="forumPost">
                        <div className="forumPostInfo">
                            <Link className="forumUserInfo" to="/users:0">
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
                    index: {
                        max: 0,
                        current: 0,
                    },
                    content: {
                        user: {
                            name: "sample 1",
                            URI: "https://picsum.photos/200/300"
                        },
                        postdata: [
                            {
                                h1: "test",
                                text: "Voluptate excepteur ipsum et qui ullamco commodo cillum officia excepteur sint aliquip aliquip. Qui mollit Lorem anim occaecat velit. Ut do deserunt pariatur cupidatat magna ut excepteur tempor nulla id laboris ad. Mollit deserunt ipsum elit non laboris id duis deserunt velit tempor minim sunt magna nisi. Ullamco qui voluptate et non."
                            },
                            {
                                text: "multi paragraph test"
                            }
                        ]
                    },
                    replies: [
                        {
                            user: {
                                name: "sample 2",
                                URI: "https://picsum.photos/500/300"
                            },
                            postdata: [
                                {
                                    text: "Ad ullamco deserunt id minim cupidatat amet sunt quis in do. Qui consectetur eiusmod mollit aliquip velit in dolore. Nostrud tempor deserunt laboris ipsum consectetur sit anim. Irure cillum ut aliquip aliqua esse consectetur dolor incididunt eiusmod adipisicing eu ipsum nisi elit."
                                }
                            ]
                        }
                    ]
                };
            }
            componentDidMount() {
                this.setState({ index: { max: 3, current: parseInt(this.props.index) } });
            }
            render() {
                return (
                    <div id="threadContainer">
                        <Post
                            name={this.state.content.user.name}
                            URI={this.state.content.user.URI}
                            data={this.state.content.postdata}
                        />
                        <div id="forumThreadReplies">
                            {this.state.replies.map((data, index) => (
                                <Post
                                    key={index}
                                    name={data.user.name}
                                    URI={data.user.URI}
                                    data={data.postdata}
                                />
                            ))}
                            <div id="replyIndex">
                                <span>Page: {this.state.index.current}</span>
                                <span>
                                    <button id="forumIndexPrev"
                                        disabled={this.state.index.current - 1 < 0 ? true : false}
                                        onClick={() => {
                                            this.setState({ index: this.state.index - 1 >= 0 ? this.state.index - 1 : this.state.index });
                                        }}>
                                        <i className="fas fa-chevron-left" />
                                    </button>
                                    <span>
                                        <i className="icon-small fas fa-circle" />
                                    </span>
                                    <button id="forumIndexNext"
                                        disabled={this.state.index.current + 1 > this.state.index.max ? true : false}
                                        onClick={() => {
                                            this.setState({ index: this.state.index + 1 });
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
        let { threadID, index } = useParams();
        return (
            <main id="forumThread">
                <header>
                    <button id="forumBack">

                    </button>
                </header>
                <Thread id={threadID} index={index} />
            </main>
        );
    }
    return (
        <Switch>
            <Route exact path={`${match.path}/`} component={Frontpage} />
            <Route path={`${match.path}/thread::threadID::index`} component={ThreadHandler} />
        </Switch>
    );
}