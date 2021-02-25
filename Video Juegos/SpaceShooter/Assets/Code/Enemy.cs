using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour
{
    public float speed = 5f;

    public float bound_X = -11f;

    private Animator anim;
    // Start is called before the first frame update
    void Awake()
    {
        anim = GetComponent<Animator>();

    }

    // Update is called once per frame
    void Update()
    {
        Move();
    }

    void Move()
    {
        Vector3 temp = transform.position;
        temp.x -= speed * Time.deltaTime;

        transform.position = temp;

        if (temp.x < bound_X)
            gameObject.SetActive(false);
    }

    void TurnOffObject()
    {
        gameObject.SetActive(false);
    }

    private void OnTriggerEnter2D(Collider2D target)
    {
        if (target.tag == "Bullet")
        {
            Invoke("TurnOffObject", 1f);

            anim.Play("Explotion");
        }

    }
}
