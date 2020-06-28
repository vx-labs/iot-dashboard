cistatus::
	@curl -s https://api.github.com/repos/vx-labs/iot-dashboard/actions/runs | jq -r '.workflow_runs[] | ("[" + .created_at + "] " + .head_commit.message +": "+.status+" ("+.conclusion+")")'  | head -n 5
