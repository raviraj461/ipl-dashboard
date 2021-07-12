package com.bollampally.ipldashboard.controller;


import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bollampally.ipldashboard.data.model.Match;
import com.bollampally.ipldashboard.data.model.Team;
import com.bollampally.ipldashboard.repository.MatchRepository;
import com.bollampally.ipldashboard.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {

	private TeamRepository teamRepository;
	private MatchRepository matchRepository;
	
	public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
		this.teamRepository = teamRepository;
		this.matchRepository = matchRepository;
	}
	
	@GetMapping("/team")
	public Iterable<Team> getTeams() {
		Iterable<Team> team = this.teamRepository.findAllByOrderByTeamNameAsc();
		return team;
	}
	
	@GetMapping("/team/{teamName}")
	public Team getTeam(@PathVariable String teamName) {
		Team team = this.teamRepository.findByTeamName(teamName);
		team.setMatches(matchRepository.findlatestMatchesByTeam(teamName, 4));
		return team;
	}
	
	@GetMapping("/team/{teamName}/matches")
	public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year){
		LocalDate startDate = LocalDate.of(year, 1, 1);
		LocalDate endDate	= LocalDate.of(year, 12, 31);
		List<Match> teamMatchesBetweenDates = this.matchRepository.getMatchesByTeamBetweenDates(teamName, startDate, endDate);

		if(teamMatchesBetweenDates.size() == 0) {
			Match match = new Match();
			match.setTeam1("N/A");
			
			teamMatchesBetweenDates.add(match);
		}
		return teamMatchesBetweenDates;
	}


}
