import defaultAvatar from "../avatar.svg";

const companyList = [
    {
        companyName: 'company name',
        dashBoardLink: '/dashBoardLink1',
        projectsLink: '/projectsLink1',
        teamLink: '/teamLink1',
        companyLink: '/companyLink1',
        user: {
            avatar: defaultAvatar,
            myProfileLink: 'myProfileLink1',
            myProject: {
                link: 'myProjectLink1',
                count: '23',
            },
            natifications: {
                link: 'natificationsLink1',
                count: '23',
            },
            tasks: {
                link: 'tasksLink1',
                count: '23',
            }
        }

    },
    {
        companyName: 'company name',
        dashBoardLink: '/dashBoardLink2',
        projectsLink: '/projectsLink2',
        teamLink: '/teamLink2',
        companyLink: '/companyLink2',
        user: {
            avatar: defaultAvatar,
            myProfileLink: 'myProfileLink2',
            myProject: {
                link: 'myProjectLink2',
                count: '23',
            },
            natifications: {
                link: 'natificationsLink2',
                count: '23',
            },
            tasks: {
                link: 'tasksLink2',
                count: '23',
            }
        }
    },
    {
        companyName: 'company name',
        dashBoardLink: '/dashBoardLink3',
        projectsLink: '/projectsLink3',
        teamLink: '/teamLink3',
        companyLink: '/companyLink3',
        user: {
            avatar: defaultAvatar,
            myProfileLink: 'myProfileLink3',
            myProject: {
                link: 'myProjectLink3',
                count: '23',
            },
            natifications: {
                link: 'natificationsLink3',
                count: '23',
            },
            tasks: {
                link: 'tasksLink3',
                count: '23',
            }
        }
    }
];

export {
    companyList
}