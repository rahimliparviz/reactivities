namespace Application.Activities.DTO
{
    public class AttendeeDto
    {
        public string Username { get; set; }
        public string DisplayName { get; set; }
        public string Image { get; set; }
        public bool IsHost { get; set; }
        
        //is current user follow that attendee
        public bool Following { get; set; }

    }
}