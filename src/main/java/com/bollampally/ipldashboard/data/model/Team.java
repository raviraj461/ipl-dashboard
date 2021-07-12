package com.bollampally.ipldashboard.data.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class Team {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String teamName;
	private long totalMatches;
	private long totalWins;
	private long totalTied;
	private long totalLost;
	
	@Transient
	private List<Match> matches;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTeamName() {
		return teamName;
	}
	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}
	public long getTotalMatches() {
		return totalMatches;
	}
	public void setTotalMatches(long totalMatches) {
		this.totalMatches = totalMatches;
	}
	public long getTotalWins() {
		return totalWins;
	}
	public void setTotalWins(long totalWins) {
		this.totalWins = totalWins;
	}
	public long getTotalTied() {
		return totalTied;
	}
	public void setTotalTied(long totalTied) {
		this.totalTied = totalTied;
	}
	public long getTotalLost() {
		return totalLost;
	}
	public void setTotalLost(long totalLost) {
		this.totalLost = totalLost;
	}
	
		public List<Match> getMatches() {
		return matches;
	}
	public void setMatches(List<Match> matches) {
		this.matches = matches;
	}
	public Team(String teamName, long totalMatches) {
		super();
		this.teamName = teamName;
		this.totalMatches = totalMatches;
	}
	
	public Team() {
	}
	@Override
	public String toString() {
		return "Team [id=" + id + ", teamName=" + teamName + ", totalMatches=" + totalMatches + ", totalWins="
				+ totalWins + ", totalTied=" + totalTied + ", totalLost=" + totalLost + "]";
	}
	
	
}
