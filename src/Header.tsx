import { Tabs, Tab, Toolbar, AppBar, Box, Typography } from '@mui/material';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { UserMenu, Logout, LoadingIndicator } from 'react-admin';

const Header = () => {
    const location = useLocation();

    let currentPath = '/';
    if (matchPath('/posts/*', location.pathname)) {
        currentPath = '/posts';
    } else if (matchPath('/comments/*', location.pathname)) {
        currentPath = '/comments';
    } else if (matchPath('/users/*', location.pathname)) {
        currentPath = '/users';
    }

    return (
        <Box component="nav" sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar variant="dense">
                    <Box flex={1} display="flex" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                            <Box
                                component="img"
                                sx={{ marginRight: '1em', height: 30 }}
                                src={
                                    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                                }
                                alt="Logo"
                            />
                            <Typography component="span" variant="h5">
                                Testi
                            </Typography>
                        </Box>
                        <Box>
                            <Tabs
                                value={currentPath}
                                aria-label="Navigation Tabs"
                                indicatorColor="secondary"
                                textColor="inherit"
                            >
                                <Tab
                                    label={'Dashboard'}
                                    component={Link}
                                    to="/"
                                    value="/"
                                />
                                <Tab
                                    label={'Posts'}
                                    component={Link}
                                    to="/posts"
                                    value="/posts"
                                />
                                <Tab
                                    label={'Comments'}
                                    component={Link}
                                    to="/comments"
                                    value="/comments"
                                />
                                <Tab
                                    label={'Users'}
                                    component={Link}
                                    to="/users"
                                    value="/users"
                                />
                            </Tabs>
                        </Box>
                        <Box display="flex">
                            <LoadingIndicator
                                sx={{
                                    '& .RaLoadingIndicator-loader': {
                                        marginTop: 2,
                                    },
                                }}
                            />
                            <UserMenu>
                                <Logout />
                            </UserMenu>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;