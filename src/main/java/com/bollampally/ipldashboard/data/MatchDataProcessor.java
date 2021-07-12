package com.bollampally.ipldashboard.data;

import java.time.LocalDate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;

import com.bollampally.ipldashboard.data.model.Match;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

  private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);

  @Override
  public Match process(final MatchInput matchInput) throws Exception {
	  
	Match match =  new Match(); 
	
	match.setId(Long.parseLong(matchInput.getId()));
	match.setDate(LocalDate.parse(matchInput.getDate()) );
	match.setCity(matchInput.getCity());
	match.setMatchWinner(matchInput.getWinner());
	match.setPlayerOfMatch(matchInput.getPlayer_of_match());
	match.setResult(matchInput.getResult());
	match.setResultMargin(matchInput.getResult_margin());
	match.setTeam1(matchInput.getTeam1());
	match.setTeam2(matchInput.getTeam2());
	match.setTossDecision(matchInput.getToss_decision());
	match.setTossWinner(matchInput.getToss_winner());
	match.setUmpire1(matchInput.getUmpire1());
	match.setUmpire2(matchInput.getUmpire2());
	match.setVenue(matchInput.getVenue());
	if("bat".equals(matchInput.getToss_decision())) {
		match.setFirstInningsTeam(matchInput.getToss_winner());
		match.setSecondInningsTeam(matchInput.getToss_winner().equals(matchInput.getTeam1())
				? matchInput.getTeam2() : matchInput.getTeam1());
	}else {
		match.setSecondInningsTeam(matchInput.getToss_winner());
		match.setFirstInningsTeam(matchInput.getToss_winner().equals(matchInput.getTeam1())
				? matchInput.getTeam2() : matchInput.getTeam1());
	}
	match.setMethod(matchInput.getMethod());
	match.setEliminator(matchInput.getEliminator());
	
    return match;
  }

}