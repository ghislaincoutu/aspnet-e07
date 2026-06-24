namespace aspnet07.Models;

using System.ComponentModel.DataAnnotations.Schema;

public class Product
{
  public int Id { get; set; }
  [Column(TypeName = "varchar(200)")]
  public string Name { get; set; } = "";
  [Column(TypeName = "decimal(18,2)")]
  public decimal Price { get; set; }
}