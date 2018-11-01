import { observer } from 'mobx-react';
import { Flex, Box } from '@rebass/grid/emotion';
import { hot } from 'react-hot-loader';
import styled from 'react-emotion';
import posed, { PoseGroup } from 'react-pose';
import React from 'react';

import Track from 'app/components/track';
import Settings from 'app/components/settings';
import config from 'app/config';
import trackEvents from 'app/trackEvents';

const PosedTrack = posed(Track)({
  enter: {
    // A prop to 'animate' to allow for the children to be delayed.
    x: 0,
    delay: 300,
    beforeChildren: true,
  },
});

const RecentTracks = ({ tracks, ...p }) => (
  <Box mt={5}>
    <PoseGroup preEnterPose="start">
      {tracks.map(t => (
        <PosedTrack mini mb="14px" track={t} key={t.playedAt} />
      ))}
    </PoseGroup>
  </Box>
);

const CurrentTrack = ({ track }) => (
  <PoseGroup preEnterPose="start">
    {track && <PosedTrack track={track} key={track.playedAt} />}
  </PoseGroup>
);

let TracksOverlay = observer(p => (
  <Flex flexDirection="column" alignItems="flex-end" className={p.className}>
    <CurrentTrack track={trackEvents.played[0]} />
    <RecentTracks
      tracks={trackEvents.played.slice(1, config.historyCutoff + 1)}
    />
  </Flex>
));

TracksOverlay = styled(TracksOverlay)`
  margin: 20px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
`;

const AppSettings = styled(Settings)`
  margin: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const App = p => (
  <React.Fragment>
    <TracksOverlay />
    <AppSettings />
  </React.Fragment>
);

export default hot(module)(App);