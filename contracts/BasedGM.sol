// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BasedGM {

    mapping(address => uint256) public lastGM;
    mapping(address => uint256) public streak;
    mapping(address => uint256) public totalGM;

    event GMRecorded(
        address indexed user,
        uint256 timestamp,
        uint256 streakCount,
        uint256 totalCount
    );

    function gm() external {

        uint256 last = lastGM[msg.sender];

        require(
            block.timestamp >= last + 23 hours,
            "Already GM today"
        );

        if (
            last != 0 &&
            block.timestamp <= last + 48 hours
        ) {
            streak[msg.sender] += 1;
        } else {
            streak[msg.sender] = 1;
        }

        lastGM[msg.sender] = block.timestamp;
        totalGM[msg.sender] += 1;

        emit GMRecorded(
            msg.sender,
            block.timestamp,
            streak[msg.sender],
            totalGM[msg.sender]
        );
    }

    function getStats(address user)
        external
        view
        returns (
            uint256 currentStreak,
            uint256 total,
            uint256 lastTimestamp
        )
    {
        return (
            streak[user],
            totalGM[user],
            lastGM[user]
        );
    }
}
